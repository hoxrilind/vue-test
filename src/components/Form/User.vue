<template>
<tr>
    <td>{{ user.first_name }}</td>
    <td>{{ user.last_name }}</td>
    <td>{{ user.is_married ? 'Yes' : 'No' }}</td>
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
