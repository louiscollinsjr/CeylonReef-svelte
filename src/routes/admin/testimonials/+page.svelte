<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
  import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from '$lib/components/ui/table';
  import { Button } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import { testimonials } from '$lib/data/testimonials';
  import { tours } from '$lib/data/tours';

  const tourMap = new Map(tours.map((t) => [t.id, t]));
  const rows = testimonials.map((t) => ({
    ...t,
    tour: t.tourId ? tourMap.get(t.tourId) : undefined
  }));
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">Testimonials</h1>
      <p class="text-sm text-muted-foreground">Manage guest feedback linked to tours.</p>
    </div>
    <Button size="sm">Add testimonial</Button>
  </div>

  <Card>
    <CardHeader>
      <CardTitle>Testimonials</CardTitle>
      <CardDescription>Guest quotes linked to tours.</CardDescription>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Tour</TableHead>
            <TableHead>Quote</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {#each rows as t}
            <TableRow>
              <TableCell>
                <div class="font-medium text-foreground">{t.name}</div>
                <div class="text-xs text-muted-foreground">{t.role}</div>
              </TableCell>
              <TableCell>
                {#if t.tour}
                  <a class="text-sm font-semibold text-foreground hover:underline" href={`/admin/tours/${t.tour.slug}`}>
                    {t.tour.shortTitle}
                  </a>
                {:else}
                  <Badge variant="secondary">Unlinked</Badge>
                {/if}
              </TableCell>
              <TableCell class="max-w-xl">
                <div class="line-clamp-2 text-foreground">“{t.quote}”</div>
              </TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</div>
