    import React from 'react'
    import {Card,CardContent,Typography} from '@material-ui/core'


    function BoxInfo({cases,title,total}) {
        
        return (
            <div>
                <Card className="BoxInfo">
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
    