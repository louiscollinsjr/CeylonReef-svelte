<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
  import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import { faqs, addFaq, updateFaq, deleteFaq, type FAQ } from '$lib/data/faqs';
  import { showToast } from '$lib/stores/toast';

  type FaqCategory = NonNullable<FAQ['category']>;
  const categories: FaqCategory[] = ['booking', 'payments', 'itinerary', 'cancellation', 'other'];

  let list = $state<FAQ[]>([...faqs]);
  let searchTerm = $state('');
  let categoryFilter = $state<'all' | FaqCategory>('all');
  let showForm = $state(false);
  let editingId = $state<string | null>(null);

  let formQuestion = $state('');
  let formAnswer = $state('');
  let formCategory = $state<FaqCategory>('other');

  const filtered = $derived(
    list.filter(f => {
      const matchesSearch = searchTerm
        ? f.question.toLowerCase().includes(searchTerm.toLowerCase()) || f.answer.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesCat = categoryFilter === 'all' ? true : f.category === categoryFilter;
      return matchesSearch && matchesCat;
    })
  );

  const refresh = () => { list = [...faqs]; };

  function openCreate() {
    editingId = null;
    formQuestion = '';
    formAnswer = '';
    formCategory = 'other';
    showForm = true;
  }

  function openEdit(f: FAQ) {
    editingId = f.id;
    formQuestion = f.question;
    formAnswer = f.answer;
    formCategory = f.category ?? 'other';
    showForm = true;
  }

  function handleSave() {
    if (!formQuestion.trim() || !formAnswer.trim()) return;
    const payload = {
      question: formQuestion.trim(),
      answer: formAnswer.trim(),
      category: formCategory
    };
    if (editingId) {
      updateFaq(editingId, payload);
      showToast('FAQ updated', 'success');
    } else {
      addFaq(payload);
      showToast('FAQ added', 'success');
    }
    showForm = false;
    refresh();
  }

  function handleDelete(id: string) {
    const f = list.find(x => x.id === id);
    if (!f || !confirm(`Delete FAQ "${f.question.slice(0, 40)}…"?`)) return;
    deleteFaq(id);
    refresh();
    showToast('FAQ deleted', 'success');
  }

  function handleCancel() {
    showForm = false;
  }
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">FAQs</h1>
      <p class="text-sm text-muted-foreground">Frequently asked questions with categories.</p>
    </div>
    <Button size="sm" onclick={openCreate}>Add FAQ</Button>
  </div>

  {#if showForm}
    <Card>
      <CardHeader>
        <CardTitle>{editingId ? 'Edit' : 'Add'} FAQ</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label>Question</Label>
          <Input bind:value={formQuestion} placeholder="e.g., How far in advance should I book?" />
        </div>
        <div class="space-y-2">
          <Label>Answer</Label>
          <Textarea bind:value={formAnswer} rows={3} placeholder="Detailed answer..." />
        </div>
        <div class="space-y-2">
          <Label>Category</Label>
          <select
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            bind:value={formCategory}
          >
            {#each categories as cat}
              <option value={cat} class="capitalize">{cat}</option>
            {/each}
          </select>
        </div>
        <div class="flex gap-2 justify-end">
          <Button variant="outline" onclick={handleCancel}>Cancel</Button>
          <Button onclick={handleSave}>{editingId ? 'Save changes' : 'Add FAQ'}</Button>
        </div>
      </CardContent>
    </Card>
  {/if}

  <Card>
    <CardHeader>
      <CardTitle>FAQs</CardTitle>
      <CardDescription>Manage and categorize common questions.</CardDescription>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <div class="flex flex-col gap-3 pb-3 md:flex-row md:items-center md:justify-between">
        <Input placeholder="Search FAQs..." class="w-full md:w-1/3" bind:value={searchTerm} />
        <select
          class="w-full md:w-40 rounded-md border border-input bg-background px-3 py-2 text-sm"
          bind:value={categoryFilter}
        >
          <option value="all">All categories</option>
          {#each categories as cat}
            <option value={cat} class="capitalize">{cat}</option>
          {/each}
        </select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-2/5">Question</TableHead>
            <TableHead class="w-2/5">Answer</TableHead>
            <TableHead>Category</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {#if filtered.length === 0}
            <TableRow>
              <TableCell colspan={4} class="py-6 text-center text-sm text-muted-foreground">
                No FAQs found.
              </TableCell>
            </TableRow>
          {:else}
            {#each filtered as faq}
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
                <TableCell class="text-right flex items-center justify-end gap-2">
                  <Button variant="secondary" size="sm" onclick={() => openEdit(faq)}>Edit</Button>
                  <Button variant="destructive" size="sm" onclick={() => handleDelete(faq.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            {/each}
          {/if}
        </TableBody>
      </Table>
    </CardContent>
  </Card>

</div>
