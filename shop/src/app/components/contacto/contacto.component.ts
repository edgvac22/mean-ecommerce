import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  faqs: any = [
    {
      "question": "¿Qué metodos de pago tienen disponible?",
      "answer": "Actualmente contamos con varios métodos de pagos en nuestro sitio web, entre ellos están Transferencia o ACH, Yappy, Nequi y Tarjeta de crédito. Además en nuestro local podrás pagar por cualquiera de estos métodos y también por tarjeta Clave."
    },
    {
      "question": "¿Sus productos cuentan con garantía?",
      "answer": "La gran mayoría de productos cuentan con garantía. De igual manera cualquier desperefecto que tenga con su producto puede mandarnos un correo a tecnico@ofideusa.net, y nosotros lo apoyaremos."
    },
    {
      "question": "¿Cuánto tiempo demoran en realizar las entregas?",
      "answer": "Aproximadamente se tardan entre el día en que realiza la compra o al día siguiente, dependiendo de la hora en que fue efectuada la compra y el fljo de pedidos."
    },
    {
      "question": "¿Hacen envíos al interior?",
      "answer": "Sí, hacemos envíos a todo el país por medio del transporte de su preferencia. De igual manera, si no sabe que transporte utilizar, nosotros se lo recomendamos, en base a su ubicación, tiempo de entrega y costo del flete."
    },
    {
      "question": "Cobran servicio a domicilio?",
      "answer": "Sí, todo pedido menor a $100.00 y que no sea para retiro en local ni pedido al interior, se cobrará dependiendo del área a enviar."
    }
  ];

  ngOnInit(): void {
    const items = document.querySelectorAll('.accordion button');

    items.forEach((item) => item.addEventListener('click', () => {
      const itemToggle = item.getAttribute('aria-expanded');

      items.forEach((otherItem) => otherItem.setAttribute('aria-expanded', 'false'));

      if (itemToggle === 'false') {
        item.setAttribute('aria-expanded', 'true');
      }
    }));
  }
  toggleAccordion(index: number) {
    this.faqs.forEach((faq: any, i: any) => {
      if (i === index) {
        faq.expanded = !faq.expanded;
      } else {
        faq.expanded = false;
      }
    });
  }
}
