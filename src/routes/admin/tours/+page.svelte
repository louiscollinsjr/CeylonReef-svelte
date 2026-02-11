<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
  import { Badge } from '$lib/components/ui/badge';
  import { tours, categoryLabels, updateTour, deleteTour, type Tour, type TourStatus, type TourCategory } from '$lib/data/tours';
  import { showToast } from '$lib/stores/toast';

  let tourList = $state<Tour[]>([...tours]);

  let searchTerm = $state('');
  let categoryFilter = $state<'all' | TourCategory>('all');
  let statusFilter = $state<'all' | TourStatus>('all');

  const filteredTours = $derived(
    tourList.filter(t => {
      const matchesSearch = searchTerm
        ? t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesCategory = categoryFilter === 'all' ? true : t.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' ? true : t.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    })
  );

  const refresh = () => {
    tourList = [...tours];
  };

  const cycleStatus = (status: TourStatus): TourStatus => {
    if (status === 'published') return 'draft';
    if (status === 'draft') return 'published';
    return 'draft';
  };

  function handleToggleStatus(id: string) {
    const current = tours.find(t => t.id === id);
    if (!current) return;
    updateTour(id, { status: cycleStatus(current.status) });
    refresh();
    showToast(`Status set to ${cycleStatus(current.status)}`, 'success');
  }

  function handleDelete(id: string) {
    const current = tours.find(t => t.id === id);
    if (!current) return;
    if (!confirm(`Delete tour "${current.title}"? This cannot be undone.`)) return;
    deleteTour(id);
    refresh();
    showToast('Tour deleted', 'success');
  }
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">Tours</h1>
      <p class="text-sm text-muted-foreground">Manage tours, statuses, categories, and pricing.</p>
    </div>
    <div class="flex gap-2">
      <Button variant="outline" size="sm">Import</Button>
      <Button size="sm" href="/admin/tours/create">Add tour</Button>
    </div>
  </div>

  <Card>
    <CardHeader>
      <CardTitle>Tours</CardTitle>
      <CardDescription>All tours with category, price, and status.</CardDescription>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <div class="flex flex-col gap-3 pb-3 md:flex-row md:items-center md:justify-between">
        <Input
          placeholder="Search tours..."
          class="w-full md:w-1/3"
          bind:value={searchTerm}
        />
        <div class="flex gap-2 w-full md:w-auto">
          <select
            class="w-full md:w-36 rounded-md border border-input bg-background px-3 py-2 text-sm"
            bind:value={categoryFilter}
          >
            <option value="all">All categories</option>
            {#each Object.entries(categoryLabels) as [value, label]}
              <option value={value}>{label}</option>
            {/each}
          </select>
          <select
            class="w-full md:w-32 rounded-md border border-input bg-background px-3 py-2 text-sm"
            bind:value={statusFilter}
          >
            <option value="all">All status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {#if filteredTours.length === 0}
            <TableRow>
              <TableCell colspan={5} class="py-6 text-center text-sm text-muted-foreground">
                No tours found. Try adjusting filters or add a new tour.
              </TableCell>
            </TableRow>
          {:else}
            {#each filteredTours as tour}
              <TableRow>
                <TableCell>
                  <div class="font-medium text-foreground">{tour.title}</div>
                  <div class="text-xs text-muted-foreground">{tour.shortDescription}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" class="capitalize">{categoryLabels[tour.category]}</Badge>
                </TableCell>
                <TableCell class="text-foreground">{tour.currency} {tour.price}</TableCell>
                <TableCell>
                  <Badge variant="outline" class="capitalize">{tour.status}</Badge>
                </TableCell>
                <TableCell class="text-right flex items-center justify-end gap-2">
                  <Button variant="outline" size="sm" onclick={() => handleToggleStatus(tour.id)}>
                    {tour.status === 'published' ? 'Unpublish' : 'Publish'}
                  </Button>
                  <Button variant="secondary" size="sm" href={`/admin/tours/${tour.slug}/edit`}>
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" href={`/admin/tours/${tour.slug}`}>
                    View
                  </Button>
                  <Button variant="destructive" size="sm" onclick={() => handleDelete(tour.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            {/each}
          {/if}
        </TableBody>
      </Table>
    </CardContent>
  </Card>

</div>
