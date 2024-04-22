<template>
   <b-container fluid>
      <b-row>
          <b-col sm="12">
              <iq-card>
                  <template v-slot:headerTitle>
                      <h4 class="card-title">Edit Books</h4>
                  </template>
                  <template v-slot:body>
                      <form @submit.prevent="Submit">
                          <div class="form-group">
                              <label>Book Name:</label>
                              <input type="text" class="form-control" v-model="bookName">
                          </div>
                          <div class="form-group">
                              <label>Book Category:</label>
                              <select class="form-control" v-model="selectedGenreId">
                                 <option disabled value="">Select Book Category</option>
                                 <option v-for="genre in genres" :key="genre._id" :value="genre._id">{{ genre.name }}</option>
                              </select>
                          </div>

                          <div class="form-group">
                              <label>Book Image:</label>
                              <div class="custom-file">
                                  <input type="file" class="custom-file-input" accept="image/png, image/jpeg" @change="handleFileChange">
                                  <label class="custom-file-label">Choose file</label>
                              </div>
                          </div>
                          <div class="form-group">
                              <label>Book Price:</label>
                              <input type="text" class="form-control" v-model="bookPrice">
                          </div>
                          <div class="form-group">
                              <label>Book Stock:</label>
                              <input type="text" class="form-control" v-model="bookStock">
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                          <button type="reset" class="btn btn-danger">Reset</button>
                      </form>
                  </template>
              </iq-card>
          </b-col>
      </b-row>
   </b-container>
  </template>

<script>
import axios from '../../axios.js'
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'editbook',
  mounted () {
    core.index()
    this.fetchGenres() // 在组件挂载时获取类别数据
    this.getData()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  data () {
    return {
      bookName: '',
      genres: [], // 保存类别数据的数组
      selectedGenreId: '', // 保存选择的类别ID
      bookImage: null,
      bookPrice: '',
      bookStock: '',
      bookId: ''
    }
  },
  methods: {
    async fetchGenres () {
      try {
        // 发送 GET 请求获取类别数据
        const response = await axios.get('/genres')
        this.genres = response // 将类别数据保存到 genres 数组中
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    },
    async Submit () {
      try {
        // 构造表单数据
        const formData = {
          name: this.bookName,
          genreId: this.selectedGenreId,
          numberInStock: this.bookStock,
          price: this.bookPrice
        }

        const response = await axios.put(`books/${this.bookId}`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        console.log('Book added:', response)
        // 返回上一个路由
        this.$router.go(-1)

        // 在这里可以添加成功后的处理逻辑
      } catch (error) {
        console.error('Error adding book:', error.response.data)
        // 在这里可以添加失败后的处理逻辑
      }
    },
    handleFileChange (event) {
      // 处理文件选择变化事件
      this.bookImage = event.target.files[0] // 保存文件到 bookImage 属性
    },
    getData () {
      const id = this.$route.params.id
      axios.get(`/books/${id}`)
        .then(response => {
        // 更新组件的数据
          this.bookName = response.name
          this.selectedGenreId = response.genre._id
          this.bookPrice = response.price
          this.bookStock = response.numberInStock
          this.bookId = response._id
        })
        .catch(error => {
          console.error('Error fetching book:', error)
        })
    }
  }
}
</script>
