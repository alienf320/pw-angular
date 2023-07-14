import { ComponentRef, Injectable } from '@angular/core';
import { ModalConfig } from '../models/modal-config';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // dialogComponentRef: ComponentRef<ModalComponent>;
  // config: ModalConfig<unknown>;
  // constructor(
  //   private componentFactoryResolver: ComponentFactoryResolver,
  //   private appRef: ApplicationRef,
  //   private injector: Injector
  // ) {}

  // open<ComponentType, ModalDataType = unknown>(
  //   componentType: Type<ComponentType>,
  //   config?: ModalConfig<ModalDataType>
  // ): ModalRef {
  //   const dialogRef = this.appendDialogComponentToBody<ModalDataType>(config);
  //   this.config = config as ModalConfig<ModalDataType>;
  //   this.dialogComponentRef.instance.setChildComponentType<ComponentType>(componentType);

  //   if (config?.width) {
  //     this.dialogComponentRef.instance.width = config.width;
  //   }

  //   if (config?.height) {
  //     this.dialogComponentRef.instance.height = config.height;
  //   }

  //   if (config?.disableBackdropClose) {
  //     this.dialogComponentRef.instance.disableBackdropClose = config.disableBackdropClose;
  //   }

  //   this.adjustWidth();
  //   return dialogRef;
  // }

  // close(): void {
  //   this.removeDialogComponentFromBody();
  // }

  // getWindowInnerWidth(): number {
  //   return window.innerWidth;
  // }

  // private adjustWidth() {
  //   const smallScreenWidth = this.dialogComponentRef.instance.smallScreenWidth;

  //   if (this.getWindowInnerWidth() <= smallScreenWidth) {
  //     this.dialogComponentRef.instance.width = '95vw';
  //   }
  // }

  // private appendDialogComponentToBody<T = unknown>(config?: ModalConfig<T>): ModalRef {
  //   const map = new WeakMap();
  //   map.set(ModalConfig, config);

  //   const dialogRef = new ModalRef();
  //   map.set(ModalRef, dialogRef);

  //   const sub = dialogRef.afterClosed.subscribe(() => {
  //     this.removeDialogComponentFromBody();
  //     sub.unsubscribe();
  //   });

  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
  //   const componentRef = componentFactory.create(new ModalInjector(this.injector, map));
  //   this.appRef.attachView(componentRef.hostView);

  //   const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  //   document.body.appendChild(domElement);
  //   this.dialogComponentRef = componentRef;
  //   return dialogRef;
  // }

  // private removeDialogComponentFromBody(): void {
  //   this.appRef.detachView(this.dialogComponentRef.hostView);
  //   this.dialogComponentRef.destroy();
  // }
}
