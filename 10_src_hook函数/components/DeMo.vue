<template>
  <div>
    <h3>hello</h3>
    <h3>x: {{point.x}}, y: {{point.y}}</h3>
  </div>
</template>

<script>
import usePoint from "@/hooks/usePoint";
export default {
  name: 'DeMo',
  setup() {
    const point = usePoint()
    return {point}
  }

}
</script>
