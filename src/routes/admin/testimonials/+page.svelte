<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
  import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from '$lib/components/ui/table';
  import { Button } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import {
    testimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    type Testimonial
  } from '$lib/data/testimonials';
  import { tours } from '$lib/data/tours';
  import { showToast } from '$lib/stores/toast';

  let list = $state<Testimonial[]>([...testimonials]);
  let searchTerm = $state('');
  let showForm = $state(false);
  let editingId = $state<string | null>(null);

  // Form fields
  let formName = $state('');
  let formRole = $state('');
  let formQuote = $state('');
  let formTourId = $state('');

  const tourMap = new Map(tours.map((t) => [t.id, t]));

  const filtered = $derived(
    list.filter(t => {
      if (!searchTerm) return true;
      const q = searchTerm.toLowerCase();
      return t.name.toLowerCase().includes(q) || t.quote.toLowerCase().includes(q);
    })
  );

  const refresh = () => { list = [...testimonials]; };

  function openCreate() {
    editingId = null;
    formName = '';
    formRole = '';
    formQuote = '';
    formTourId = '';
    showForm = true;
  }

  function openEdit(t: Testimonial) {
    editingId = t.id;
    formName = t.name;
    formRole = t.role;
    formQuote = t.quote;
    formTourId = t.tourId ?? '';
    showForm = true;
  }

  function handleSave() {
    if (!formName.trim() || !formQuote.trim()) return;
    const payload = {
      name: formName.trim(),
      role: formRole.trim(),
      quote: formQuote.trim(),
      tourId: formTourId || undefined
    };
    if (editingId) {
      updateTestimonial(editingId, payload);
      showToast('Testimonial updated', 'success');
    } else {
      addTestimonial(payload);
      showToast('Testimonial added', 'success');
    }
    showForm = false;
    refresh();
  }

  function handleDelete(id: string) {
    const t = list.find(x => x.id === id);
    if (!t || !confirm(`Delete testimonial from "${t.name}"?`)) return;
    deleteTestimonial(id);
    refresh();
    showToast('Testimonial deleted', 'success');
  }

  function handleCancel() {
    showForm = false;
  }
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">Testimonials</h1>
      <p class="text-sm text-muted-foreground">Manage guest feedback linked to tours.</p>
    </div>
    <Button size="sm" onclick={openCreate}>Add testimonial</Button>
  </div>

  {#if showForm}
    <Card>
      <CardHeader>
        <CardTitle>{editingId ? 'Edit' : 'Add'} Testimonial</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="grid gap-4 md:grid-cols-2">
          <div class="space-y-2">
            <Label>Guest name</Label>
            <Input bind:value={formName} placeholder="e.g., Sarah Mitchell" />
          </div>
          <div class="space-y-2">
            <Label>Role / Origin</Label>
            <Input bind:value={formRole} placeholder="e.g., From United Kingdom" />
          </div>
        </div>
        <div class="space-y-2">
          <Label>Quote</Label>
          <Textarea bind:value={formQuote} rows={3} placeholder="Guest testimonial..." />
        </div>
        <div class="space-y-2">
          <Label>Linked tour</Label>
          <select
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            bind:value={formTourId}
          >
            <option value="">None</option>
            {#each tours as t}
              <option value={t.id}>{t.shortTitle}</option>
            {/each}
          </select>
        </div>
        <div class="flex gap-2 justify-end">
          <Button variant="outline" onclick={handleCancel}>Cancel</Button>
          <Button onclick={handleSave}>{editingId ? 'Save changes' : 'Add testimonial'}</Button>
        </div>
      </CardContent>
    </Card>
  {/if}

  <Card>
    <CardHeader>
      <CardTitle>Testimonials</CardTitle>
      <CardDescription>Guest quotes linked to tours.</CardDescription>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <div class="pb-3">
        <Input placeholder="Search testimonials..." class="w-full md:w-1/3" bind:value={searchTerm} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Tour</TableHead>
            <TableHead>Quote</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {#if filtered.length === 0}
            <TableRow>
              <TableCell colspan={4} class="py-6 text-center text-sm text-muted-foreground">
                No testimonials found.
              </TableCell>
            </TableRow>
          {:else}
            {#each filtered as t}
              <TableRow>
                <TableCell>
                  <div class="font-medium text-foreground">{t.name}</div>
                  <div class="text-xs text-muted-foreground">{t.role}</div>
                </TableCell>
                <TableCell>
                  {#if t.tourId && tourMap.get(t.tourId)}
                    <a class="text-sm font-semibold text-foreground hover:underline" href={`/admin/tours/${tourMap.get(t.tourId)?.slug}`}>
                      {tourMap.get(t.tourId)?.shortTitle}
                    </a>
                  {:else}
                    <Badge variant="secondary">Unlinked</Badge>
                  {/if}
                </TableCell>
                <TableCell class="max-w-xl">
                  <div class="line-clamp-2 text-foreground">"{t.quote}"</div>
                </TableCell>
                <TableCell class="text-right flex items-center justify-end gap-2">
                  <Button variant="secondary" size="sm" onclick={() => openEdit(t)}>Edit</Button>
                  <Button variant="destructive" size="sm" onclick={() => handleDelete(t.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            {/each}
          {/if}
        </TableBody>
      </Table>
    </CardContent>
  </Card>

</div>
