<template>
<tr>
    <td>{{ user.firstname }}</td>
    <td>{{ user.lastname }}</td>
    <td>{{ user.married }}</td>
    </tr>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object,
  },
};
</script>
