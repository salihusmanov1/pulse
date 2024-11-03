<template>
  <div>
    {{ projects }}
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';
import { ref } from 'vue';
import type { Tables } from "../../../database/types";

const projects = ref<Tables<'projects'>[] | null>(null)

  ; (async () => {
    const { data, error } = await supabase.from('projects').select()

    projects.value = data
    if (error)
      console.log(error);

    return data
  })()

</script>