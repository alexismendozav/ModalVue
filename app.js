Vue.component("modal", {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },

  template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3 class="green">{{title}}</h3>
            <div>
            <slot></slot>
            </div>
            <footer>
              <button class="btn btn-success" v-on:click="close">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`,
});

new Vue({
  el: "#app",

  data() {
    return {
      showModal: 0,
      title: "Modal con Vue",
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
});
