import React from "react";
import {observer, inject} from 'mobx-react';
import {Navigation} from '../../../containers/Navigation'
import {ICategoryStore} from "../../../store/CategoryStore";
import Poster from "../../../components/Poster";


@inject("categoryStore")
@observer
class Dashboard extends React.Component <{ categoryStore: ICategoryStore }> {

    constructor(props: any) {
        super(props)
    }

    componentDidMount(): void {
        this.props.categoryStore.getCategoriesAsync();
        this.props.categoryStore.getBlocksAsync();
        this.props.categoryStore.getMinutesAsync()
    }

    render() {

        const {categories, blocks, minutes} = this.props.categoryStore

        return (
            <div className="dashboard">
                <div className="row align-items-center dashboard__header">
                    <h1 className="col-sm-12 col-md-4">Courses</h1>
                    <div className="col-sm-12 offset-xl-3 col-xl-5">
                        <Navigation
                            navItems={categories}
                        />
                    </div>
                </div>
                <div className="dashboard__body">
                    {blocks.map((block, index) =>
                        <Poster
                            key={index}
                            title={block}
                            info={`${minutes[index]?.time} min`}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default Dashboard