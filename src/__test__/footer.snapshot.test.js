import React from 'react'
import Footer from '../component/Footer'
import {create} from 'react-test-renderer';

describe('Snapshot Test',()=>{
    test('testing Footer',()=>{
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})