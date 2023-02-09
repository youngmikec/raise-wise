import React from 'react';
import DropdownList from './dropdown-list';

type Props = {
    title: string;
}

const AppFilterDropdown = ({ title }: Props) => {
    return (
        <>
            <div className="widget-boxed padd-bot-0">
                <div className="widget-boxed-header br-0">
                    <h4>{ title } <a href="#designation" data-toggle="collapse"><i className="pull-right ti-plus" aria-hidden="true"></i></a></h4>
                </div>
                <div className="widget-boxed-body collapse in" id="designation" aria-expanded={true}>
                    <div className="side-list no-border">
                        <ul>

                            <DropdownList label='Web Designer' amount={102} />
                            <DropdownList label='Php Developer' amount={78} />
                            <DropdownList label='Project Manager' amount={12} />
                            <DropdownList label='Human resource' amount={85} />
                            <DropdownList label='CMS Developer' amount={307} />
                            <DropdownList label='App Developer' amount={256} />
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppFilterDropdown;