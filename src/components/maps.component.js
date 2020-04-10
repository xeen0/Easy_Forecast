import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import DetailedComponent from "./details.component";
import DailyComponent from "./daily.component";
import location_icon from '../assests/location/location_icon.svg'
// const AnyReactComponent = ({ lat,lng }) => <div>{lat} {lng}</div>;
class MapsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 17.273882,
      longitude: 78.548668,
      timezone: "Asia/Kolkata",
      summary: "Mostly Cloudy",
      pressure: 1018.4,
      icon: "clear-day",
      temperature:76.54 ,
      day: -1,
      daily: [
        {
          time: 1581532200,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1581556380,
          sunsetTime: 1581597960
        },
        {
          time: 1581618600,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1581642780,
          sunsetTime: 1581684360
        },
        {
          time: 1581705000,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1581729120,
          sunsetTime: 1581770820
        },
        {
          time: 1581791400,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1581815520,
          sunsetTime: 1581857220
        },
        {
          time: 1581877800,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1581901860,
          sunsetTime: 1581943680
        },
        {
          time: 1581964200,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1581988260,
          sunsetTime: 1582030080
        },
        {
          time: 1582050600,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1582074600,
          sunsetTime: 1582116480
        },
        {
          time: 1582137000,
          summary: "Clear throughout the day.",
          icon: "clear-day",
          sunriseTime: 1582074600,
          sunsetTime: 1582116480
        }
      ]
    };
  }
  handleApiLoaded = (map, maps) => {
    console.log(map, maps);
  };
  render() {
    return (
      <div>
        <div
          style={{
            paddingTop: 20,
            paddingBottom: 10,
            position: "relative",
            display: "flex"
          }}
        >
          <div style={{ width: "50%" }}>
            <DetailedComponent
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              timezone={this.state.timezone}
              summary={this.state.summary}
              pressure={this.state.pressure}
              icon={this.state.icon}
              temperature={this.state.temperature}
            />
          </div>
          {this.state.daily.map((data, index) => {
            return (
              <div style={{ marginRight: 5 }}>
                <DailyComponent
                  day={index}
                  summary={data.summary}
                  icon={data.icon}
                  key={data.time}
                />
              </div>
            );
          })}
        </div>
        <div style={{ height: "64vh", width: "100%", paddingTop: "12" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD6xVWuiQKNFN0dpKJO_lnffd19YVHM7Vo"
            }}
            defaultCenter={[this.state.latitude , this.state.longitude]}
            defaultZoom={10}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) =>
              this.handleApiLoaded(map, maps)
            }
            onClick={data => {
              console.log(data);
              const { lat, lng } = data;
              this.setState({
                lat,
                lng
              });
              fetch(
                `https://api.darksky.net/forecast/dbfd487768cfc473078aa6d5acd560f5/${lat},${lng}`
              )
                .then(res => res.json())
                .then(data => {
                  const {
                    latitude,
                    longitude,
                    currently,
                    timezone,
                    daily
                  } = data;
                  console.log(daily);
                  console.log(timezone);
                  this.setState({
                    latitude,
                    longitude,
                    timezone: timezone,
                    summary: currently.summary,
                    pressure: currently.pressure,
                    temperature: currently.temperature,
                    icon: currently.icon,
                    daily: daily.data
                  });
                });
            }}
          >
          <AnyReactComponent
          lat={this.state.latitude}
          lng={this.state.longitude}
        /></GoogleMapReact>
        </div>
      </div>
    );
  }
}

const AnyReactComponent = () => <div ><img src={location_icon}  alt='location'/></div>;

export default MapsComponent;
