import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from '../components';
import {Home, Portfolio, Market, Profile} from '../screens';
import {COLORS} from '../constants';
import {icons} from '../constants';
import {CustomizedButton} from '../components';
import TradeContext from '../context/TradeContex';
const Tab = createBottomTabNavigator();

function Tabs(): JSX.Element {
  const {trade, setTrade} = React.useContext(TradeContext);
  const handleTradeButtonPress = useCallback(() => {
    setTrade(1 - trade);
  }, [trade, setTrade]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
          borderTopColor: 'transparent',
          backgroundColor: COLORS.primary,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            !trade && (
              <TabIcon
                focused={focused}
                icon={icons.home}
                name="Home"
                isTrade={undefined}
                trade={undefined}
              />
            ),
        }}
        listeners={() => ({
          tabPress: event => {
            trade ? event.preventDefault() : null;
          },
        })}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            !trade && (
              <TabIcon
                focused={focused}
                icon={icons.briefcase}
                name="Portfolio"
                isTrade={undefined}
                trade={undefined}
              />
            ),
        }}
        listeners={() => ({
          tabPress: event => {
            trade ? event.preventDefault() : null;
          },
        })}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={trade ? icons.close : icons.trade}
              trade={trade}
              isTrade={true}
              name="Trade"
            />
          ),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarButton: props => (
            <CustomizedButton
              {...props}
              onPress={
                // React.useContext(TradeContext).changeTrade
                handleTradeButtonPress
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            !trade && (
              <TabIcon
                focused={focused}
                icon={icons.market}
                name="Market"
                isTrade={undefined}
                trade={undefined}
              />
            ),
        }}
        listeners={() => ({
          tabPress: event => {
            trade ? event.preventDefault() : null;
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) =>
            !trade && (
              <TabIcon
                focused={focused}
                icon={icons.profile}
                name="Profile"
                isTrade={undefined}
                trade={undefined}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
