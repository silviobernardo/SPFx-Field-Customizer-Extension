import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseFieldCustomizer,
  type IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'FieldCustomizerStrings';
import AgeFieldCustomizerComponent, { IAgeFieldCustomizerComponentProps } from './components/AgeFieldCustomizerComponent';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAgeFieldCustomizerProperties {
  // This is an example; replace with your own property
  // sampleText?: string;
}

const LOG_SOURCE: string = 'AgeFieldCustomizer';

export default class AgeFieldCustomizer
  extends BaseFieldCustomizer<IAgeFieldCustomizerProperties> {

  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    Log.info(LOG_SOURCE, 'Activated AgeFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(LOG_SOURCE, `The following string should be equal: "AgeFieldCustomizer" and "${strings.Title}"`);
    return Promise.resolve();
  }

  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const value: number = event.fieldValue;
    //const text: string = `${this.properties.sampleText}: ${event.fieldValue}`;

    const fieldCustomizer: React.ReactElement<{}> =
      React.createElement(AgeFieldCustomizerComponent, { value } as IAgeFieldCustomizerComponentProps);

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
