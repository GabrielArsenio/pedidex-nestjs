<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12 text-end">
        <vmd-button color="dark" variant="gradient">
          <i class="fas fa-plus me-2"></i>
          Novo Cliente
        </vmd-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                      "
                    >
                      Código
                    </th>
                    <th
                      class="
                        text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                        ps-2
                      "
                    >
                      Nome
                    </th>
                    <th
                      class="
                        text-center text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                      "
                    >
                      Documento
                    </th>
                    <th
                      class="
                        text-center text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                      "
                    >
                      E-mail
                    </th>
                    <th
                      class="
                        text-center text-uppercase text-secondary text-xxs
                        font-weight-bolder
                        opacity-7
                      "
                    >
                      Telefone
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cliente in clientes" :key="cliente.id">
                    <td>
                      <span class="align-middle text-center text-sm">{{
                        cliente.id
                      }}</span>
                    </td>
                    <td>
                      <span class="text-secondary text-xs font-weight-bold">{{
                        cliente.nome
                      }}</span>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        cliente.documento
                      }}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        cliente.email
                      }}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        cliente.telefone
                      }}</span>
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findAll } from "../service/clientes.service";
import VmdButton from "@/components/VmdButton.vue";

export default {
  name: "clientes",
  components: {
    VmdButton,
  },
  data() {
    return {
      clientes: [],
    };
  },
  mounted() {
    findAll().then((resp) => (this.clientes = resp.data));
  },
};
</script>
