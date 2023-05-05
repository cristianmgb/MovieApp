import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {StyleSheet, View} from 'react-native';
import {ItemReview} from '../molecules/ItemReview';
import {FlatList} from 'react-native';
import {ItemCast} from '../molecules/ItemCast';

export const TabDetail = () => {
  const [index, setIndex] = React.useState(0);
  const {movieDetail, movieCast, movieReview} = useSelector(
    (state: RootState) => state,
  );

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicator}>
        <Tab.Item title="About" titleStyle={styles.tabItem} />
        <Tab.Item title="Reviews" titleStyle={styles.tabItem} />
        <Tab.Item title="Cast" titleStyle={styles.tabItem} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabViewItem}>
          <View style={styles.contentTabView}>
            <Text style={styles.textAbout}>{movieDetail.overview}</Text>
          </View>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <View style={styles.contentTabView}>
            {movieReview.length > 0 ? (
              <FlatList
                data={movieReview}
                renderItem={({item}) => <ItemReview item={item} />}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            ) : null}
          </View>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <View style={styles.contentTabView}>
            {movieCast.length > 0 ? (
              <FlatList
                data={movieCast}
                renderItem={({item}) => <ItemCast item={item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
              />
            ) : null}
          </View>
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: '#3A3F47',
    height: 4,
  },
  tabItem: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  tabViewItem: {
    width: '100%',
  },
  contentTabView: {
    padding: 16,
  },
  textAbout: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 15,
  },
});
