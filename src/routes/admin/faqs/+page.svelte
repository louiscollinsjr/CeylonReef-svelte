<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import { faqs } from '$lib/data/faqs';
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">FAQs</h1>
      <p class="text-sm text-muted-foreground">Frequently asked questions with categories.</p>
    </div>
    <Button size="sm">Add FAQ</Button>
  </div>

  <Card>
    <CardHeader>
      <CardTitle>FAQs</CardTitle>
      <CardDescription>Manage and categorize common questions.</CardDescription>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-2/5">Question</TableHead>
            <TableHead class="w-2/5">Answer</TableHead>
            <TableHead class="w-1/5">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {#each faqs as faq}
            <TableRow>
              <TableCell class="align-top">
                <div class="font-medium text-foreground">{faq.question}</div>
              </TableCell>
              <TableCell class="align-top">
                <p class="text-sm text-muted-foreground line-clamp-3">{faq.answer}</p>
              </TableCell>
              <TableCell class="align-top">
                {#if faq.category}
                  <Badge variant="secondary" class="capitalize">{faq.category}</Badge>
                {:else}
                  <Badge variant="outline">Uncategorized</Badge>
                {/if}
              </TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</div>
