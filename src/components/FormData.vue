<template>
  <div>
    <h2>Form Data</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="address">Address:</label>
        <textarea id="address" v-model="formData.address" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="submittedData">
      <h2>Submitted Data</h2>
      <table class="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-cell">{{ submittedData.name }}</td>
            <td class="border-cell">{{ submittedData.phone }}</td>
            <td class="border-cell">{{ submittedData.email }}</td>
            <td class="border-cell">{{ submittedData.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        email: "",
        address: "",
      },
      submittedData: null,
    };
  },
  methods: {
    submitForm() {
      this.submittedData = { ...this.formData };
    },
  },
};
</script>

<style>
.data-table {
  border-collapse: collapse;
  width: 100%;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.border-cell {
  border: 1px solid #ddd;
}
</style>