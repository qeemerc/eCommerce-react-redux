import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import {
	getTotalBasketCount,
	getTotalBasketPrice
} from 'selectors'

const BasketCart = ({totalBasketCount, totalBasketPrice}) => (
	<div>
		<div className='dropdown'>
			<Link 
				to='/basket' 
				id='dLabel' 
				className='btn btn-inverse btn-block btn-lg'
			>
				<i className='fa fa-shopping-cart' />
				<span>{totalBasketCount} item(s) - ${totalBasketPrice}</span>
			</Link>
		</div>
	</div>
)

const mapStateToProps = state => ({
	totalBasketCount: getTotalBasketCount(state),
	totalBasketPrice: getTotalBasketPrice(state)
})

export default connect(mapStateToProps, null)(BasketCart)