class Card extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['destino', 'duracion', 'costo', 'descripcion', 'actividades', 'reservado', 'imagen', 'calificacion', 'alojamiento', 'guia_incluido'];
    }
    
    connectedCallback() {
      this.render();
    }
}

export default Card;