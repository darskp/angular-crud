export interface apiResponseModel {
    message: string;
    data: any;
    result: boolean;
}

export interface GetAllEmployee {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    role: string
}
export interface clientProjectList {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: Date;
    expectedEndDate: Date;
    clientName: string;
    clientProjectId: number;
}
