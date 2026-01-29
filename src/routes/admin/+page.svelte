<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
  import { Badge } from '$lib/components/ui/badge';
  import { tours } from '$lib/data/tours';
  import { testimonials } from '$lib/data/testimonials';
  import { faqs } from '$lib/data/faqs';

  const stats = [
    { label: 'Tours', value: tours.length },
    { label: 'Testimonials', value: testimonials.length },
    { label: 'FAQs', value: faqs.length }
  ];
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">Overview</h1>
      <p class="text-sm text-muted-foreground">Quick snapshot of tours, testimonials, and FAQs.</p>
    </div>
    <div class="flex gap-2">
      <Button variant="outline" href="/admin/tours">Manage tours</Button>
      <Button href="/admin/faqs">Manage FAQs</Button>
    </div>
  </div>

  <div class="grid gap-4 md:grid-cols-3">
    {#each stats as stat}
      <Card>
        <CardContent class="pt-6">
          <div class="text-sm text-muted-foreground">{stat.label}</div>
          <div class="mt-1 text-2xl font-semibold text-foreground">{stat.value}</div>
        </CardContent>
      </Card>
    {/each}
  </div>

  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0">
      <div>
        <CardTitle>Recent tours</CardTitle>
        <CardDescription>Latest tours with status and category.</CardDescription>
      </div>
      <Button variant="ghost" size="sm" href="/admin/tours">View all</Button>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {#each tours.slice(0, 5) as tour}
            <TableRow>
              <TableCell>
                <div class="font-medium text-foreground">{tour.title}</div>
                <div class="text-xs text-muted-foreground">{tour.shortDescription}</div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" class="capitalize">{tour.category}</Badge>
              </TableCell>
              <TableCell class="text-foreground">
                {tour.currency} {tour.price}
              </TableCell>
              <TableCell>
                <Badge variant="outline" class="capitalize">{tour.status}</Badge>
              </TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</div>
