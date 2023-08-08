import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip.component';
import { Move } from 'src/app/models/moves.models';
import { TooltipAbilityComponent } from '../components/tooltip-ability/tooltip-ability.component';
import { ABILITIES } from '../abilities';

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
  @Input() tooltip!: any;
  @Input() typeTooltip: 'default' | 'ability' = 'default';

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
    if (this.tooltip) {
      let tooltipComponent: any;

      // Determine the tooltip component based on the type input
      if (this.typeTooltip === 'ability') {
        tooltipComponent = TooltipAbilityComponent;
        const tooltipPortal = new ComponentPortal(tooltipComponent);
        const tooltipRef: ComponentRef<any> = this.overlayRef.attach(tooltipPortal);


        const abilityFull = ABILITIES.find( ab => ab.name === this.tooltip)
        tooltipRef.instance.ability = abilityFull;
      } else {
        tooltipComponent = TooltipComponent;
        const tooltipPortal = new ComponentPortal(tooltipComponent);
        const tooltipRef: ComponentRef<any> =
          this.overlayRef.attach(tooltipPortal);

        tooltipRef.instance.move = this.tooltip;
      }
    }
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }
}
