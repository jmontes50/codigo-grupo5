
$("#table_id").DataTable(
  {
    dom: 'Blfrtip',
    buttons: [
      'copy', 'excel', 'pdf', "print"
    ],
    language: {
      "search": "Buscar:",
      "lengthMenu": "Mostrar _MENU_ reigistros",
      "info": "Mostrando del _START_ al _END_ de _TOTAL_ registros",
      "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
      "paginate": {
        "first": "Primero",
        "last": "Último",
        "next": "Siguiente",
        "previous": "Anterior"
      },
    }
  }
);