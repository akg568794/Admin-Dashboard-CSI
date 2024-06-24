import { Col, Row } from "antd"
import { Edit,useForm } from "@refinedev/antd"
import { UPDATE_COMPANY_MUTATION } from "@/graphql/mutations"

const EditPage = () => {
    const {saveButtonProps,formProps,formLoading,queryResult }=useForm({
        redirect:false,
        meta:{
            gqlMutation:UPDATE_COMPANY_MUTATION
        }
       })
  return (
    <div>
        <Row gutter={[32,32]}>
            <Col xs={24} xl={12}>
                <Edit
                isLoading={formLoading}
                saveButtonProps={saveButtonProps}
                breadcrumb={false}
                
                ></Edit>



            </Col>
        </Row>
    </div>
  )
}

export default EditPage