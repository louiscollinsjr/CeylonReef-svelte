<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
  import { Badge } from '$lib/components/ui/badge';
  import { stops, addStop, updateStop, deleteStop, type AddOnStop } from '$lib/data/stops';
  import { showToast } from '$lib/stores/toast';

  let stopList = $state<AddOnStop[]>([...stops]);
  let searchTerm = $state('');
  let showAdd = $state(false);

  let newCity = $state('');
  let newRegion = $state('');
  let newDescription = $state('');
  let newDays = $state(1);
  let newHighlights = $state('');

  let editingId = $state<string | null>(null);
  let editCity = $state('');
  let editRegion = $state('');
  let editDescription = $state('');
  let editDays = $state(1);
  let editHighlights = $state('');

  const refresh = () => { stopList = [...stops]; };

  const filteredStops = $derived(
    stopList.filter(s =>
      searchTerm
        ? s.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.region.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    )
  );

  function handleAdd() {
    if (!newCity.trim()) return;
    addStop({
      city: newCity.trim(),
      region: newRegion.trim(),
      description: newDescription.trim(),
      suggestedDays: newDays,
      highlights: newHighlights.split(',').map(h => h.trim()).filter(Boolean),
      enabled: true
    });
    newCity = ''; newRegion = ''; newDescription = ''; newDays = 1; newHighlights = '';
    showAdd = false;
    refresh();
    showToast('Stop added', 'success');
  }

  function handleToggle(id: string) {
    const stop = stops.find(s => s.id === id);
    if (!stop) return;
    updateStop(id, { enabled: !stop.enabled });
    refresh();
    showToast(`${stop.city} ${stop.enabled ? 'disabled' : 'enabled'}`, 'success');
  }

  function handleDelete(id: string) {
    const stop = stops.find(s => s.id === id);
    if (!stop) return;
    if (!confirm(`Delete "${stop.city}"? This cannot be undone.`)) return;
    deleteStop(id);
    refresh();
    showToast('Stop deleted', 'success');
  }

  function startEdit(stop: AddOnStop) {
    editingId = stop.id;
    editCity = stop.city;
    editRegion = stop.region;
    editDescription = stop.description;
    editDays = stop.suggestedDays;
    editHighlights = stop.highlights.join(', ');
  }

  function saveEdit() {
    if (!editingId || !editCity.trim()) return;
    updateStop(editingId, {
      city: editCity.trim(),
      region: editRegion.trim(),
      description: editDescription.trim(),
      suggestedDays: editDays,
      highlights: editHighlights.split(',').map(h => h.trim()).filter(Boolean)
    });
    editingId = null;
    refresh();
    showToast('Stop updated', 'success');
  }

  function cancelEdit() {
    editingId = null;
  }
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">Add-On Stops</h1>
      <p class="text-sm text-muted-foreground">Manage cities/locations clients can add à la carte to any tour.</p>
    </div>
    <Button size="sm" onclick={() => { showAdd = !showAdd; }}>
      {showAdd ? 'Cancel' : 'Add stop'}
    </Button>
  </div>

  {#if showAdd}
    <Card>
      <CardHeader>
        <CardTitle>New Stop</CardTitle>
        <CardDescription>Add a city that clients can add to their tour.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onsubmit={(e) => { e.preventDefault(); handleAdd(); }} class="grid gap-4 md:grid-cols-2">
          <div>
            <label for="new-city" class="text-sm font-medium text-foreground">City *</label>
            <Input id="new-city" bind:value={newCity} placeholder="e.g. Trincomalee" required />
          </div>
          <div>
            <label for="new-region" class="text-sm font-medium text-foreground">Region</label>
            <Input id="new-region" bind:value={newRegion} placeholder="e.g. Eastern Province" />
          </div>
          <div class="md:col-span-2">
            <label for="new-desc" class="text-sm font-medium text-foreground">Description</label>
            <Input id="new-desc" bind:value={newDescription} placeholder="Short description of the stop" />
          </div>
          <div>
            <label for="new-days" class="text-sm font-medium text-foreground">Suggested Days</label>
            <Input id="new-days" type="number" min="1" max="7" bind:value={newDays} />
          </div>
          <div>
            <label for="new-highlights" class="text-sm font-medium text-foreground">Highlights (comma-separated)</label>
            <Input id="new-highlights" bind:value={newHighlights} placeholder="Beach, Temple, Market" />
          </div>
          <div class="md:col-span-2 flex justify-end">
            <Button type="submit" size="sm">Add Stop</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  {/if}

  <Card>
    <CardHeader>
      <CardTitle>All Stops</CardTitle>
      <CardDescription>{stopList.length} locations available for à la carte add-ons.</CardDescription>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <div class="pb-3">
        <Input placeholder="Search stops..." class="w-full md:w-1/3" bind:value={searchTerm} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>City</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Days</TableHead>
            <TableHead>Highlights</TableHead>
            <TableHead>Status</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {#if filteredStops.length === 0}
            <TableRow>
              <TableCell colspan={6} class="py-6 text-center text-sm text-muted-foreground">
                No stops found.
              </TableCell>
            </TableRow>
          {:else}
            {#each filteredStops as stop}
              <TableRow>
                {#if editingId === stop.id}
                  <TableCell>
                    <Input bind:value={editCity} class="w-full" />
                  </TableCell>
                  <TableCell>
                    <Input bind:value={editRegion} class="w-full" />
                  </TableCell>
                  <TableCell>
                    <Input type="number" min="1" max="7" bind:value={editDays} class="w-16" />
                  </TableCell>
                  <TableCell>
                    <Input bind:value={editHighlights} class="w-full" />
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" class="capitalize">{stop.enabled ? 'Active' : 'Disabled'}</Badge>
                  </TableCell>
                  <TableCell class="text-right flex items-center justify-end gap-2">
                    <Button variant="default" size="sm" onclick={saveEdit}>Save</Button>
                    <Button variant="ghost" size="sm" onclick={cancelEdit}>Cancel</Button>
                  </TableCell>
                {:else}
                  <TableCell>
                    <div class="font-medium text-foreground">{stop.city}</div>
                    <div class="text-xs text-muted-foreground line-clamp-1">{stop.description}</div>
                  </TableCell>
                  <TableCell class="text-foreground">{stop.region}</TableCell>
                  <TableCell class="text-foreground">{stop.suggestedDays}</TableCell>
                  <TableCell>
                    <div class="flex flex-wrap gap-1">
                      {#each stop.highlights.slice(0, 3) as h}
                        <Badge variant="secondary" class="text-xs">{h}</Badge>
                      {/each}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" class="capitalize">{stop.enabled ? 'Active' : 'Disabled'}</Badge>
                  </TableCell>
                  <TableCell class="text-right flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm" onclick={() => handleToggle(stop.id)}>
                      {stop.enabled ? 'Disable' : 'Enable'}
                    </Button>
                    <Button variant="secondary" size="sm" onclick={() => startEdit(stop)}>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onclick={() => handleDelete(stop.id)}>
                      Delete
                    </Button>
                  </TableCell>
                {/if}
              </TableRow>
            {/each}
          {/if}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</div>
