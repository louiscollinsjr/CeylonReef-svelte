<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
  import { Badge } from '$lib/components/ui/badge';
  import { tours, categoryLabels } from '$lib/data/tours';
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">Tours</h1>
      <p class="text-sm text-muted-foreground">Manage tours, statuses, categories, and pricing.</p>
    </div>
    <div class="flex gap-2">
      <Button variant="outline" size="sm">Import</Button>
      <Button size="sm">Add tour</Button>
    </div>
  </div>

  <Card>
    <CardHeader>
      <CardTitle>Tours</CardTitle>
      <CardDescription>All tours with category, price, and status.</CardDescription>
    </CardHeader>
    <CardContent class="overflow-x-auto">
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
          {#each tours as tour}
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
              <TableCell class="text-right">
                <Button variant="ghost" size="sm" href={`/admin/tours/${tour.slug}`}>
                  View
                </Button>
              </TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</div>
