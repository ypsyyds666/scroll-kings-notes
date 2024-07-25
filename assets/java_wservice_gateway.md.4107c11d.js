import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.4760b438.js";const A=JSON.parse('{"title":"网关-gateway","description":"","frontmatter":{},"headers":[],"relativePath":"java/wservice/gateway.md","filePath":"java/wservice/gateway.md"}'),p={name:"java/wservice/gateway.md"},o=l(`<h1 id="网关-gateway" tabindex="-1">网关-gateway <a class="header-anchor" href="#网关-gateway" aria-label="Permalink to &quot;网关-gateway&quot;">​</a></h1><h2 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h2><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--网关--&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">org.springframework.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">spring-cloud-starter-gateway</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">&lt;!--nacos discovery--&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">com.alibaba.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">spring-cloud-starter-alibaba-nacos-discovery</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#676E95;font-style:italic;">&lt;!--负载均衡--&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">org.springframework.cloud</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">spring-cloud-starter-loadbalancer</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dependency</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h2><p>四个属性含义如下：</p><ul><li><p><code>id</code>：路由的唯一标示</p></li><li><p><code>predicates</code>：路由断言，其实就是匹配条件</p></li><li><p><code>filters</code>：路由过滤条件，后面讲</p></li><li><p><code>uri</code>：路由目标地址，<code>lb://</code>代表负载均衡，从注册中心获取目标微服务的实例列表，并且负载均衡选择一个访问。</p><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3></li></ul><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">8080</span></span>
<span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">application</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">gateway</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">cloud</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">nacos</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">server-addr</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">192.168.150.101:8848</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">gateway</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">item</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 路由规则id，自定义，唯一</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">uri</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lb://item-service</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 路由的目标服务，lb代表负载均衡，会从注册中心拉取服务列表</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">predicates</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 路由断言，判断当前请求是否符合当前规则，符合则路由到目标服务</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Path=/items/**,/search/**</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 这里是以请求路径作为判断规则</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cart</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">uri</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lb://cart-service</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">predicates</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Path=/carts/**</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">user</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">uri</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lb://user-service</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">predicates</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Path=/users/**,/addresses/**</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">trade</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">uri</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lb://trade-service</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">predicates</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Path=/orders/**</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pay</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">uri</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lb://pay-service</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">predicates</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Path=/pay-orders/**</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="路由过滤" tabindex="-1">路由过滤 <a class="header-anchor" href="#路由过滤" aria-label="Permalink to &quot;路由过滤&quot;">​</a></h3><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">cloud</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">gateway</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">item</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">uri</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">lb://item-service</span></span>
<span class="line"><span style="color:#BABED8;">          </span><span style="color:#F07178;">predicates</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">Path=/items/**,/search/**</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="网关登录校验" tabindex="-1">网关登录校验 <a class="header-anchor" href="#网关登录校验" aria-label="Permalink to &quot;网关登录校验&quot;">​</a></h2><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Component</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">RequiredArgsConstructor</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">class</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">AuthGlobalFilter</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">implements</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GlobalFilter</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Ordered</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">private</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">final</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">JwtTool</span><span style="color:#BABED8;"> jwtTool</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">private</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">final</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">AuthProperties</span><span style="color:#BABED8;"> authProperties</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">private</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">final</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">AntPathMatcher</span><span style="color:#BABED8;"> antPathMatcher </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">AntPathMatcher</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 实现GatewayFilter接口的filter方法，用于在网关路由之前进行权限验证。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 检查每个请求是否包含有效的用户令牌，如果不包含或令牌无效，则拒绝访问。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">exchange</span><span style="color:#676E95;font-style:italic;"> 服务器web交换对象，包含请求和响应信息。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#BABED8;font-style:italic;">chain</span><span style="color:#676E95;font-style:italic;">    网关过滤器链，用于继续或中断请求处理链。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@return</span><span style="color:#676E95;font-style:italic;"> Mono&lt;Void&gt; 表示异步处理结果，用于表示响应的完成。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">Mono</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Void</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">filter</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">ServerWebExchange</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">exchange</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">GatewayFilterChain</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">chain</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 获取请求对象</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">ServerHttpRequest</span><span style="color:#BABED8;"> request </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> exchange</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getRequest</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 检查当前请求路径是否在排除列表中，不在列表中则进行令牌验证</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">isNeedYZ</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPath</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">toString</span><span style="color:#89DDFF;">()))</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> chain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">exchange</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 初始化用户ID为null，用于后续判断</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">Long</span><span style="color:#BABED8;"> userId </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 初始化令牌变量</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">String</span><span style="color:#BABED8;"> token </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 尝试从请求头中获取&quot;Authorization&quot;字段，用于获取令牌</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> headers </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getHeaders</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Authorization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">headers </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#BABED8;"> headers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            token </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> headers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 尝试解析令牌，获取用户ID</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            userId </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> jwtTool</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parseToken</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">token</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">Exception</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 解析失败，表示令牌无效，设置响应状态码为未授权，并结束响应</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#C792EA;">ServerHttpResponse</span><span style="color:#BABED8;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> exchange</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getResponse</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#BABED8;">            response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setStatusCode</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">HttpStatus</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">UNAUTHORIZED</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setComplete</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 打印用户ID，用于调试</span></span>
<span class="line"><span style="color:#BABED8;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">userId = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> userId</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">String</span><span style="color:#BABED8;"> userInfo </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> userId</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C792EA;">ServerWebExchange</span><span style="color:#BABED8;"> swe </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> exchange</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mutate</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">builder </span><span style="color:#C792EA;">-&gt;</span><span style="color:#BABED8;"> builder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user-info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> userInfo</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">build</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 如果请求通过了所有检查，继续处理请求链</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> chain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">swe</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">private</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">boolean</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">isNeedYZ</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">path</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#BABED8;"> pathPattern </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#BABED8;"> authProperties</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getExcludePaths</span><span style="color:#89DDFF;">())</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">antPathMatcher</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">pathPattern</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> path</span><span style="color:#89DDFF;">))</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">public</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getOrder</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div>`,11),e=[o];function r(t,c,y,D,F,i){return n(),a("div",null,e)}const E=s(p,[["render",r]]);export{A as __pageData,E as default};
