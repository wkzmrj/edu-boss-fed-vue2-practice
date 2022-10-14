import request from '@/utils/request'

export const getQueryCourses = data => {
  return request({
    method: 'POST',
    url: 'boss/course/getQueryCourses',
    data
  })
}

export const changeState = params => {
  return request({
    method: 'GET',
    url: '/boss/course/changeState',
    params
  })
}
export const saveOrUpdateCourse = data => {
  return request({
    method: 'POST',
    url: '/boss/course/saveOrUpdateCourse',
    data
  })
}
export const uploadCourseImage = (data, onUploadProgress) => {
  // data 应当为 FormData 对象
  return request({
    method: 'POST',
    url: '/boss/course/upload',
    data,
    // onUploadProgress 用于检测上传进度
    onUploadProgress
  })
}
export const getCourseById = courseId => {
  return request({
    method: 'GET',
    url: '/boss/course/getCourseById',
    params: {
      courseId
    }
  })
}
