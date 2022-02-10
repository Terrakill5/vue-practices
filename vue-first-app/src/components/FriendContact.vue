<template>
  <li>
    <h2>
      {{ name }} {{isFavorite ? "(Favorite)" : "" }}
    </h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreShown ? "Hide" : "Show"}} Details</button>
    <ul v-if="detailsAreShown">
      <li>
        <strong>Phone:</strong> {{phoneNumber}}
      </li>
      <li><strong>Email:</strong>  {{emailAdress}}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  /* props: [
    "name",
    "phoneNumber",
    "emailAdress",
    "isFavorite"
  ], */
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAdress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  //emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function(id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing!");
        return false;
      }
    },
    "delete": function() {
      return true;
    }
  },
  data() {
    return {
      detailsAreShown: false
      
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreShown = !this.detailsAreShown;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
      
    }
  }
}
</script>
