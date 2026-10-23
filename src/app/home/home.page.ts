import { Component, signal } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular';

/**
 * Pagina "home" de la practica de diseno.
 *
 * Es un componente STANDALONE (no hay NgModule): las dependencias de la
 * plantilla se declaran en el array `imports` del propio decorador.
 *
 * Puntos relevantes para la practica:
 *  - `styleUrls` apunta a un fichero .scss. El schematic de Ionic lo genera asi
 *    porque angular.json define "styleext": "scss" para
 *    @ionic/angular-toolkit:page. Es decir, SI: el componente usa Sass por
 *    defecto en un proyecto Ionic + Angular.
 *  - No se indica `encapsulation`, por lo que se aplica la de Angular por
 *    defecto (ViewEncapsulation.Emulated): el CSS compilado queda limitado a
 *    esta plantilla.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  // Solo se importan los componentes Ionic que realmente usa la plantilla.
  imports: [IonContent, IonButton],
})
export class HomePage {
  /**
   * Contador de pulsaciones del boton.
   * Se usa un `signal` (API reactiva de Angular): al cambiar su valor la
   * plantilla se actualiza sola, sin NgZone ni detectChanges manual.
   */
  readonly pulsaciones = signal(0);

  /** Manejador del evento (click) del boton. */
  saludar(): void {
    this.pulsaciones.update((n) => n + 1);
  }
}
