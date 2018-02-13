import React , {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Navbar/>
                    <Jumbotron title="Title" subtitle="Put something witty"/>
                    <h2>Welcome</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis tincidunt gravida. non sapien euismod, suscipit ex id, varius ante. Pellentesque ullamcorper sed quam in pellentesque. Morbi in lacus quam. Duis at ex et magna sollicitudin finibus vel vitae lorem. Aenean porta maximus nisi non consectetur. Vivamus eu tellus consectetur, lobortis arcu a, consequat libero.

                    Morbi vitae fringilla ipsum. Sed malesuada vitae nisi quis rutrum. Etiam vitae accumsan nunc, fermentum gravida purus. Etiam molestie, massa id varius rhoncus, purus quam condimentum tortor, in volutpat est justo sed elit. Integer tempus facilisis iaculis. Aliquam accumsan nunc vitae justo consectetur, vel mattis nibh congue. Ut sollicitudin dolor eu mattis volutpat. Vivamus ac mattis lorem, eget commodo tortor. Vivamus nulla sapien, finibus a nisi nec, aliquet tempus metus. Aliquam malesuada faucibus lorem, et pretium mauris aliquet eu. In hac habitasse platea dictumst. Pellentesque id lacus sit amet orci finibus placerat vel elementum ex. Pellentesque porta varius ligula vel fermentum. Nulla dapibus sed nulla in venenatis. Fusce posuere libero nec tincidunt imperdiet. Aenean rhoncus dui et augue maximus, vitae auctor nulla congue.

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;