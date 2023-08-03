import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip.component';
import { Move } from 'src/app/models/moves.models';


export interface TooltipData {
  power: string;
  description: string;
  imageUrl: string;
}

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective implements OnInit {
  private overlayRef!: OverlayRef;
  @Input('tooltip') move!: Move;

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay
  ) {}

  ngOnInit() {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
        },
      ]);

    // Connect position strategy
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    // Create tooltip portal
    const tooltipPortal = new ComponentPortal(TooltipComponent);

    // Attach tooltip portal to overlay
    const tooltipRef: ComponentRef<TooltipComponent> =
      this.overlayRef.attach(tooltipPortal);

    // Pass content to tooltip component instance
    tooltipRef.instance.move = this.move;
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }
}
