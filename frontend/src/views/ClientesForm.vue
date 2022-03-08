<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body pb-2">
            <input type="hidden" id="id" name="id" v-model="cliente.id" />
            <div class="mb-3">
              <label for="nome" class="form-label">Nome</label>
              <input
                type="text"
                class="form-control"
                id="nome"
                v-model="cliente.nome"
              />
            </div>
            <div class="mb-3">
              <label for="documento" class="form-label">Documento</label>
              <input
                type="text"
                class="form-control"
                id="documento"
                v-model="cliente.documento"
              />
            </div>
            <div class="mb-3">
              <label for="telefone" class="form-label">Telefone</label>
              <input
                type="text"
                class="form-control"
                id="telefone"
                v-model="cliente.telefone"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input
                type="text"
                class="form-control"
                id="email"
                v-model="cliente.email"
              />
            </div>

            <vmd-alert
              class="font-weight-light"
              color="danger"
              dismissible
              v-if="erros.length"
              @dismiss="erros = []"
            >
              <div v-for="erro in erros" :key="erro">
                <span class="text-sm">{{ erro }}</span>
              </div>
            </vmd-alert>

            <div class="text-right">
              <vmd-button
                class="my-3 mb-2"
                variant="gradient"
                :color="$store.state.mcolor"
                @click="salvar(cliente)"
                >Salvar</vmd-button
              ><vmd-button
                class="my-3 mb-2 m-2"
                variant="gradient"
                color="secondary"
                @click="$router.go(-1)"
                >Cancelar</vmd-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VmdButton from "@/components/VmdButton.vue";
import VmdAlert from "@/components/VmdAlert.vue";

import { create, findById, update } from "../service/clientes.service";

export default {
  name: "clientes-form",
  components: {
    VmdButton,
    VmdAlert,
  },
  data() {
    return {
      cliente: {},
      erros: [],
    };
  },
  methods: {
    salvar(model) {
      if (model.id) {
        update(model.id, model)
          .then(() => this.$router.push("/clientes"))
          .catch((err) => (this.erros = err.response.data.message));
      } else {
        create(model)
          .then(() => this.$router.push("/clientes"))
          .catch((err) => (this.erros = err.response.data.message));
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      findById(this.$route.params.id).then(
        (resp) => (this.cliente = resp.data)
      );
    }
  },
};
</script>
