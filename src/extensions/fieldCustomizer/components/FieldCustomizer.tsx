/* eslint-disable @typescript-eslint/no-explicit-any */
import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';
import styles from './FieldCustomizer.module.scss';
import { ListItemAccessor } from '@microsoft/sp-listview-extensibility';
import { FieldRendererHelper } from "@pnp/spfx-controls-react/lib/Utilities";
import { IContext } from '@pnp/spfx-controls-react/lib/common/Interfaces';

export interface IFieldCustomizerProps {
  fieldValue: any;
  className?: string;
  cssProps?: React.CSSProperties;
  listItemAccessor: ListItemAccessor;
  context: IContext;
}

export interface IFieldRendererHelperState {
  fieldRenderer?: FieldRendererHelper;
}

const LOG_SOURCE: string = 'FieldCustomizer';

export default class FieldCustomizer extends React.Component<IFieldCustomizerProps, IFieldRendererHelperState> {
  constructor(props: IFieldCustomizerProps) {
    super(props);
    this.state = {};
  }


  public async componentDidMount(): Promise<void> {
    const {
      fieldValue,
      className,
      cssProps,
      listItemAccessor,
      context
    } = this.props;

    // asynchronously getting field renderer. FieldRendererHelper will automatically select needed renderer based on field type
    const renderer = await FieldRendererHelper.getFieldRenderer(fieldValue, {
      className: className,
      cssProps: cssProps
    }, listItemAccessor, context);

    this.setState({
      fieldRenderer: renderer
    });
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FieldCustomizer unmounted');
  }

  public render(): React.ReactElement<{}> {
    const {
      fieldRenderer
    } = this.state;

    return (
      <div className={styles.cell}>
        {fieldRenderer || null}
      </div>
    );
  }
}
