import React, {Component} from 'react';
import { Map,Marker,Circle } from 'react-amap';

class Amap extends Component {
    constructor (){
        super()
        this.state = {
            center: {longitude: 112.876954, latitude: 28.230139},
            radius: 20,
            style: {
                strokeOpacity: 0,
                fillColor: 'rgba(255,0,0,0.2)'
            },
            draggable: true,
        }

        this.mapCenter = {longitude: 112.876954, latitude: 28.230139};

        this.markerPosition = {longitude: 112.876954, latitude: 28.230139};
    }
    render() {
        console.log(this.props.abc,this.props.xyz)
        return (
            <div>
                <Map
                    amapkey={'788e08def03f95c670944fe2c78fa76f'}
                    zoom={18}
                    center={this.mapCenter}
                >
                    <Circle
                        center={ this.state.center }
                        radius={ this.state.radius }
                        style={ this.state.style }
                        draggable={ this.state.draggable }
                    ></Circle>
                    <Marker position={this.markerPosition} />
                </Map>
            </div>
        );
    }
}

export default Amap;