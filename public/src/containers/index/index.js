import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTicker } from '../../actions/tick';
import {
    SCcontainer, SCimg, SCpercentChange, SCtitle, SCprice
} from './style';

function mapStateToProps(state)
{
    return {
        coinmarketcap: state.coinmarketcap
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        fetchTicker: bindActionCreators(fetchTicker, dispatch)
    };
}

function index(props)
{
    // 與 componentDidMount 和 componentDidUpdate 類似:
    useEffect(() => {

        // props.fetchTicker({
        //     query: {
        //         limit: 10
        //     }
        // });

        // const { query, fetchTicker } = props;
        //
        // let source = interval(5000).pipe(
        //     map(() => {
        //         return fetchTicker({
        //             query: {
        //                 limit: query.limit || 10
        //             }
        //         });
        //     })
        // );
        // source.subscribe();
    }, []);

    const renderItems = (props) => {
        const { coinmarketcap } = props;
        let items = [];
        for (let key in coinmarketcap)
        {
            const item = coinmarketcap[key];
            let dom = (
                <div key={item.id}>
                    <SCimg symbol={key} />
                    <SCtitle className="title">
                        {item.symbol}
                    </SCtitle>
                    <SCprice className="price">
                        {item.quotes.USD.price}
                    </SCprice>
                    <SCpercentChange percentChange={item.quotes.USD.percent_change_24h}>
                        {item.quotes.USD.percent_change_24h}
                        %
                    </SCpercentChange>
                </div>
            );
            items = [...items, dom];
        }

        return items;
    };

    return (
        <SCcontainer>
            9999
            {/* {renderItems(props)} */}
        </SCcontainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
