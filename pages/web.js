import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

export default class IWeb extends Component {
  render() {
    return (
	<WebView
        source={{uri: 'http://www.whatsalethailand.com/sale/category/all'}}
        style={{marginTop: 20}}
      />
    );
  }
}
