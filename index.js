        document.addEventListener('DOMContentLoaded', function() {


            var i = 1;

            new Vue({
                el: '#app',
                data: {
                    // Input nombre
                    nombre: '',
                    // Input telefono
                    telefono: '',
                    // Ver o no ver el formulario de actualizar
                    formActualizar: false,
                    // La posición de tu lista donde te gustaría actualizar 
                    idActualizar: -1,
                    // Input nombre dentro del formulario de actualizar
                    nombreActualizar: '',
                    // Input telefono dentro del formulario de actualizar
                    telefonoActualizar: '',
                    // Lista de Personas
                    Personas: [],
                },
                methods: {
                    crearPersona: function() {

                        // Añaadimos a nuestra lista
                        this.Personas.push({
                            id: i++,
                            nombre: this.nombre,
                            telefono: this.telefono
                        });
                        // Vaciamos el formulario de añadir
                        this.nombre = '';
                        this.telefono = '';
                    },
                    verFormActualizar: function(Persona_id) {
                        // Antes de mostrar el formulario de actualizar, rellenamos sus campos
                        this.idActualizar = Persona_id;
                        this.nombreActualizar = this.Personas[Persona_id].nombre;
                        this.telefonoActualizar = this.Personas[Persona_id].telefono;
                        // Mostramos el formulario
                        this.formActualizar = true;
                    },
                    borrarPersona: function(Persona_id) {
                        // Borramos de la lista
                        this.Personas.splice(Persona_id, 1);
                    },
                    guardarActualizacion: function(Persona_id) {
                        // Ocultamos nuestro formulario de actualizar
                        this.formActualizar = false;
                        // Actualizamos los datos
                        this.Personas[Persona_id].nombre = this.nombreActualizar;
                        this.Personas[Persona_id].telefono = this.telefonoActualizar;
                    }
                }
            });
        });