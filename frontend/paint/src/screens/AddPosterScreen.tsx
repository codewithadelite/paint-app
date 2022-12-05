import React, {useState} from 'react'
import axios from 'axios'
import {useForm, SubmitHandler} from 'react-hook-form'
import Container from '../components/Container'


interface FormData{
    countryName: string;
    region: string;
}

interface imageData{
    flags: {
        png:string;
        svg:string;
    }
}

const AddPosterScreen: React.FC = () => {
    const {register, handleSubmit, formState: { errors}, reset} = useForm<FormData>()
    const [countryImage, setCountryImage] = useState<string[]>([] as string[])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchCountry:SubmitHandler<FormData> = async (data: FormData) => {
        console.log(errors);
        setIsLoading(true)
        const response = await axios.get(`https://restcountries.com/v3.1/name/${data.countryName}`)
        let allFlags: string[] = [];
        response.data.map( (item: imageData) => allFlags.push(item.flags.png))
        setCountryImage(allFlags)
        setIsLoading(false)
    };
  return (
    <div className='container mt-5'>
        <div className='row container'>
            <div className='col-md-5'>
                <h6>Add Task</h6>
                <form className='country-search-form' onSubmit={handleSubmit(fetchCountry)}>
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className='form-control py-2'
                            placeholder='Country'
                            autoComplete='false'
                            style={errors.countryName && Styles.borderRed}
                            {...register("countryName", 
                                {required: "This field needs to be filled", minLength: {value:4, message:"Minimum value is 4"}})
                            }

                        />
                        {errors.countryName?.type === 'required' && 
                        <span className='text-danger'> {errors.countryName.message} </span>}
                        {errors.countryName?.type === 'minLength' && 
                        <span className='text-danger'> {errors.countryName.message} </span>}
                    </div><br />
                    <div className='form-group'>
                        <input 
                            type="text" 
                            className='form-control py-2'
                            placeholder='Region'
                            style={errors.region && Styles.borderRed}
                            {...register("region", {required: "This field needs to be filled"})}

                        />
                        {errors.region?.type === 'required' && 
                        <span className='text-danger'> {errors.region.message} </span>}
                    </div><br />
                    <div className='form-group'>
                        <div className="d-grid gap-2">
                            <button type='submit' className='btn btn-primary py-2 btn-leat'>
                                Submit
                            </button>
                            <button 
                                className='btn btn-primary py-2 btn-leat-2'
                                onClick={() => reset()}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-md-1'>
                {
                    isLoading ? 
                    (
                        <div className='p-5 d-flex align-items-center justify-content-center'>
                            <span className='spinner-border text-info'></span>
                        </div>
                    ):
                    (
                        countryImage.length !== 0 ? (
                            countryImage.map(item => (
                                <div>
                                    <img src={item} alt="" width="100%" />
                                </div>
                            ))
                        ):""
                    )

                }
            </div>
            <div className='col-md-6'>
                <h6>Task List</h6>
                <span className='text-second font-500'>In progress <span className=' badge bg-dark border-radius-5'>3</span></span>
                <div className='mt-2'>
                    <Container >
                        <div className='row'>
                            <div className='col-md-1'>
                                <i className='fa-regular fa-circle'></i>
                            </div>
                            <div className='col-md-11'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <strong>Update user flows</strong><br />
                                    <span 
                                        className='text-dark bg-light px-4 border-radius-5 py-1'
                                        style={{cursor:"pointer"}}
                                    >
                                        <i className='fa fa-ellipsis'></i>
                                    </span>
                                </div>
                                <span className='text-second' style={{fontSize:"13px"}}> Working on UI/UX</span><br />
                                <span className='badge bg-warning'>In progress</span>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='mt-2'>
                    <Container >
                        <div className='row'>
                            <div className='col-md-1'>
                                <i className='fa fa-circle text-success'></i>
                            </div>
                            <div className='col-md-11'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <strong>Update user flows</strong><br />
                                    <span 
                                        className='text-dark bg-light px-4 border-radius-5 py-1'
                                        style={{cursor:"pointer"}}
                                    >
                                        <i className='fa fa-ellipsis'></i>
                                    </span>
                                </div>
                                <span className='text-second' style={{fontSize:"13px"}}> Working on UI/UX</span><br />
                                <span className='badge bg-success'>Completed</span>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='mt-2'>
                    <Container >
                        <div className='row'>
                            <div className='col-md-1'>
                                <i className='fa-regular fa-circle'></i>
                            </div>
                            <div className='col-md-11'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <strong>Update user flows</strong><br />
                                    <span 
                                        className='text-dark bg-light px-4 border-radius-5 py-1'
                                        style={{cursor:"pointer"}}
                                    >
                                        <i className='fa fa-ellipsis'></i>
                                    </span>
                                </div>
                                <span className='text-second' style={{fontSize:"13px"}}> Working on UI/UX</span><br />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPosterScreen

const Styles = {
    borderRed:{
        borderColor:"red"
    },
};