import React from 'react'
import AutoComplete from 'material-ui/lib/auto-complete';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 600,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'http://lorempixel.com/500/400/nature/',
    title: 'Nature',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/500/400/city/',
    title: 'City',
  },
  {
    img: 'http://lorempixel.com/500/400/people/',
    title: 'People',
  },
  {
    img: 'http://lorempixel.com/500/400/cats/',
    title: 'Cats',
    featured: true,
  },
  {
    img: 'http://lorempixel.com/500/400/animals/',
    title: 'Animals',
  },
  {
    img: 'http://lorempixel.com/500/400/sports/',
    title: 'Sports',
  },
  {
    img: 'http://lorempixel.com/500/400/abstract/',
    title: 'Abstract',
  },
  {
    img: 'http://lorempixel.com/500/400/fashion/',
    title: 'Fashion',
  },
];


export default class Examples extends React.Component {
  render () {
    const colWidth = this.props.width / (this.props.numColumns + 0.2)
    return (
      <div style={{
        display: 'flex',
        flexDirection: this.props.numColumns > 1 ? 'row' : 'column',
        justifyContent: 'space-around',
        alignItems: this.props.numColumns > 1 ? 'flex-start' : 'center',
      }}>
        <div style={{
          display: 'flex',
          width: colWidth,
          flexDirection: 'column',
        }}>
          <div style={{marginTop: 10, marginBottom: 20}}>Some tiles (scrollable)</div>
          <div style={styles.root}>
            <GridList
              cols={2}
              cellHeight={200}
              padding={1}
              style={styles.gridList}
            >
              {tilesData.map((tile, i) => (
                <GridTile
                  key={i}
                  title={tile.title}
                  actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                  actionPosition="left"
                  titlePosition="top"
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                  cols={tile.featured ? 2 : 1}
                  rows={tile.featured ? 2 : 1}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
        <div style={{
          width: colWidth
        }}>
          <AutoComplete
            floatingLabelText="Type in your favourite fruit"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={fruit}
          />
          <Card style={{width: colWidth, height: colWidth / 1.5 + 320, marginBottom: 10}}>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"
            />
            <CardMedia
              overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="http://lorempixel.com/600/337/nature/" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}
