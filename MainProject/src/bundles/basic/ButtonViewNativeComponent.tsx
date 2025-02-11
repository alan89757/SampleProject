import {
    ViewProps,
    HostComponent,
    requireNativeComponent,  // Fabric
} from 'react-native';
import type { 
    DirectEventHandler
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export type OnButtonClickEventData = Readonly<{
    isButtonClick: boolean,
    type: string,
}>;

export interface ButtonViewProps extends ViewProps {
    buttonText: string,
    onButtonClick?: DirectEventHandler<OnButtonClickEventData>;
}

export default codegenNativeComponent<ButtonViewProps>(
    'CustomButtonView',
) as HostComponent<ButtonViewProps>;
