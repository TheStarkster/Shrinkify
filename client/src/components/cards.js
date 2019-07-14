import React, { Component } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './styles/navbar.css';
import axios from 'axios'
// function getShortlink(data){
//         fetch('http://localhost:5000/',data,{
//         method:'POST',
//         body:JSON.stringify(data),
//         headers:{
//             "Content-type":"application/json;charset=UTF-8"
//         }
//     }).then(res=>{
//         console.log(res);
//     });
// }



class CustomCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shortUrl: '',
            enableBadge: false
        }
    }
    txtChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000', {
            txtlongUrl: this.state.txtlongUrl
        })
        .then(function (response) {
                var shortID = response.data.u.shortId;
                this.setState((prevState, props) => {
                    return {
                        shortUrl: props.shortUrl,
                        enableBadge: true
                    };
                  })
            })
            .catch(function (error) {
                // console.log(error);
            });
            this.setState({
                    shortUrl: "http://localhost:5000 shortID",
                    enableBadge: true
                }, () => {
                    console.log(this.state);
                });
        }

    render() {
        const { shortUrl, enableBadge } = this.state
        return (
            <form onSubmit={this.SubmitHandler}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Create Short Url</Card.Title>
                        <Card.Text>
                            <input type="text" className="form-control" id="longurl" name="txtlongUrl" placeholder="Long Url" onChange={this.txtChangeHandler} />
                        </Card.Text>
                        <div>
                            <Badge pill variant="success">
                                <span value={shortUrl} className={enableBadge ? 'ShortUrlBadge active' : 'ShortUrlBadge'}></span>
                            </Badge>
                        </div>
                        <Button variant="primary" type="submit" >Shrinkify</Button>
                    </Card.Body>
                </Card>
            </form>
        )
    }

}

export default CustomCard