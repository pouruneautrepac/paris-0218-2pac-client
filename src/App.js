import React, { Component } from 'react'

import { Router } from '@reach/router'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

import Home from './containers/Home'
import ContactContainer from './containers/ContactContainer'
import ArticleContainer from './containers/ArticleContainer'
import ActualityContainer from './containers/ActualityContainer'
import ResourcesContainer from './containers/ResourcesContainer'
import NewsletterContainer from './containers/NewsletterContainer'

/* mocks */
import infoContact from './mocks/infoContact.json'

import './App.css'

class App extends Component {
  state = {
    articles: [],
    documents: [],
  }

  isMountedv2 = false

  async componentDidMount () {

    this.isMountedv2 = true;

    try {
      await fetch('/articlesCat')
      .then(response => response.json())
      .then(dbArticles => {
        this.setState({ articles: dbArticles })
      })

      await fetch('/documentsCat')
      .then(response => response.json())
      .then(dbDoc => {
        this.setState({ documents: dbDoc })
      })
    } catch(e) {
      if (this.isMountedv2) {
        this.setState({e})
      }
    }
  }

  componentWillUnmount() {
    this.isMountedv2 = false
  }

  render () {
    return (
      <div>
        <Header />
        <div className="changing-content" >
          <Router>

            <Home path="/" uneData={this.state.articles} data={this.state.articles} />
            <ArticleContainer path="/article/:id" articles={this.state.articles} />
            <ActualityContainer path="/actuality" ActuData={this.state.articles} />
            <ResourcesContainer path="/resources" ResourceData={this.state.documents} />
            <NewsletterContainer path="/newsletter" />
            <ContactContainer path="/contact" contactData={infoContact} />

          </Router>
          <SideBar />

        </div>

        <Footer />

      </div>
    )
  }
}

export default App
