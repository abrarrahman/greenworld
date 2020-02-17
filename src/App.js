import React, {Component} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import $ from 'jquery';

import './App.css';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummy = { lorem500: `Messenger bag taxidermy locavore typewriter. Man braid subway tile flannel la croix single-origin coffee butcher vice live-edge succulents. You probably haven't heard of them pinterest mustache green juice, palo santo etsy sriracha thundercats skateboard vaporware williamsburg. Adaptogen truffaut kombucha banjo actually keffiyeh cray umami venmo. Knausgaard mlkshk waistcoat you probably haven't heard of them. Small batch meggings coloring book sartorial, keffiyeh fam +1 man braid distillery shabby chic migas street art single-origin coffee cray poutine.

// Portland farm-to-table subway tile vaporware gastropub migas kinfolk mlkshk. Cardigan paleo before they sold out cold-pressed. Actually la croix banh mi hammock raw denim vegan kogi poke ethical ramps affogato umami everyday carry whatever bespoke. Irony sriracha godard gochujang lyft roof party. Kinfolk XOXO hell of, migas sartorial edison bulb beard cred vaporware meggings food truck slow-carb.

// Gastropub enamel pin mixtape wayfarers snackwave DIY brunch iceland tilde irony. Pork belly bicycle rights humblebrag leggings chambray photo booth microdosing butcher tattooed taiyaki wolf pour-over forage. Pok pok hella paleo skateboard. Vice messenger bag raw denim paleo tbh yuccie literally +1 neutra irony single-origin coffee tacos direct trade chartreuse synth.

// Pok pok readymade pug disrupt raclette green juice banh mi tacos distillery intelligentsia tumblr. Skateboard selfies fashion axe keffiyeh kitsch kogi banh mi. Chartreuse artisan coloring book, stumptown schlitz cred paleo letterpress flexitarian vaporware marfa ugh single-origin coffee. Gentrify direct trade plaid mumblecore art party irony polaroid keytar butcher. VHS iceland vaporware, fingerstache fam fixie poutine truffaut brooklyn banjo hashtag. Venmo twee banh mi vegan. Letterpress pop-up hoodie, meditation crucifix coloring book hell of craft beer.

// Listicle twee pug, kitsch offal prism cold-pressed bicycle rights disrupt lumbersexual. Fam fashion axe 8-bit, before they sold out normcore venmo authentic pok pok cornhole tofu master cleanse neutra. Pour-over twee before they sold out, tofu dreamcatcher gluten-free selvage pop-up polaroid viral edison bulb street art photo booth glossier flexitarian. Microdosing cronut sustainable stumptown, DIY lyft chia occupy shaman. Banjo schlitz brooklyn venmo. Neutra fanny pack kombucha meggings scenester helvetica fingerstache roof party. Paleo shabby chic bushwick, humblebrag hashtag kale chips chicharrones pinterest knausgaard kitsch la croix vaporware lomo DIY.`
 }

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'Home'
    }
  }
  onRouteChange = (route) => {
    this.setState({route});
  }
  setNav = () => {
    $(document).ready(function() {
      $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.navbig').height()) {
          $('.navfixed').addClass('fixed-top');
        }else{
          $('.navfixed').removeClass('fixed-top');
        }
      });
    });
  }
  render() {
    this.setNav();
    return (
      <div className="App">
        <Header onRouteChange={this.onRouteChange}/>
        {
          {
            'Home': <Home/>,
            'About': <About/>,
            'Products': <Products/>,
            'Contact': <Contact/>
          }[this.state.route]
        }
        <div className='w-80 center mv5'>{dummy.lorem500}</div>
        <Footer/>
        {/* <Jumbotron/>
        <Showcase/>
         */}
      </div>
    );
  }
}

export default App;
