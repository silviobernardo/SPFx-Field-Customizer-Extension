import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BaseFieldCustomizer,
  type IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import RatingFieldCustomizerComponent, { IRatingFieldCustomizerComponentProps } from './components/RatingFieldCustomizerComponent';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IRatingFieldCustomizerProperties {
}

export default class RatingFieldCustomizer
  extends BaseFieldCustomizer<IRatingFieldCustomizerProperties> {

  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    return Promise.resolve();
  }

  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const value: number = event.fieldValue;

    const fieldCustomizer: React.ReactElement<{}> =
      React.createElement(RatingFieldCustomizerComponent, { value } as IRatingFieldCustomizerComponentProps);

    ReactDOM.render(fieldCustomizer, event.domElement);
  }

  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
