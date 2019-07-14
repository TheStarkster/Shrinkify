import React, { Component } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './styles/navbar.css';
async function getShortlink(body){
    const response = await fetch('http://localhost:5000/'+body.longUrl,{
        method:'POST',
        body:JSON.stringify(body),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    }).then(res=>{
        console.log(res);
    });
    console.log(response);
}

class CustomCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            longUrl: '',
            shortUrl: ''
        }
    }

    txtChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // axios.post('http://localhost:5000/'+this.state.txtlongUrl)
        // .then(res=>{
        //     console.log(res)
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        getShortlink(this.state);
    }

    render() {
        const { shortUrl } = this.state
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
                                <span value={shortUrl} className="longurlspan"></span>
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