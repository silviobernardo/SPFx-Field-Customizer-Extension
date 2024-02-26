import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';
import styles from './AgeFieldCustomizerComponent.module.scss';

export interface IAgeFieldCustomizerComponentProps {
  // text: string;
  value: number;
}

const LOG_SOURCE: string = 'AgeFieldCustomizerComponent';

export default class AgeFieldCustomizerComponent extends React.Component<IAgeFieldCustomizerComponentProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: AgeFieldCustomizerComponent mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: AgeFieldCustomizerComponent unmounted');
  }

  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.fieldCustomizer}>
        <div className={styles.full} style={{ width: `${this.props.value}%` }}>
          {this.props.value}
        </div>
      </div>
    );
  }
}
