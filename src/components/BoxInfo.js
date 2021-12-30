    import React from 'react'
    import {Card,CardContent,Typography} from '@material-ui/core'
import './BoxInfo.css'

    function BoxInfo({cases,casesType=("cases"),active,title,total, ...props}) {
        
        return (
            <div>
                <Card className={active? 'BoxInfo--selected':'BoxInfo'}
                onClick={props.onClick}>
                    <CardContent>
                        <Typography className="BoxInfo__title"color='primary'>
                            {title} 
                        </Typography>
                        <h2 className="BoxInfo__cases">{cases}</h2>
                        <Typography className="BoxInfo__total">
                            {total} Total
                        </Typography>
                    </CardContent>

                </Card>
                
            </div>
        )
    }
    
    export default BoxInfo;
    